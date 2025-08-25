import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const observationTypes = [
  "Senior School Learning Observation",
  "Senior School Learning Walk", 
  "Senior School Self Assessment",
  "Senior School Support Plan",
  "Senior School Peer Observation Reflection"
];

const teachers = [
  "Akan, Michael",
  "Almeida, Fabio", 
  "Ascencio Dias, Ivan",
  "Backhouse, Robin",
  "Bagnariolli, Eduardo",
  "Baldon, Enrico",
  "Belmonte, Ana Carolina",
  "Best, Robert",
  "Bishop, Sam",
  "Bishop, Chantal",
  "Cababe, Bruna"
];

const keyStages = ["NA", "Key Stage 1", "Key Stage 2", "Key Stage 3", "Key Stage 4", "Key Stage 5"];

const subjects = [
  "IB Maths",
  "IGCSE Maths", 
  "KS3 Maths",
  "Mathematics",
  "English Literature",
  "Physics",
  "Chemistry",
  "Biology"
];

export function CreateObservationCard() {
  const [date, setDate] = useState<Date>();
  const [showForm, setShowForm] = useState(false);

  return (
    <Card className="w-full">
      <CardHeader className="bg-sps-ruby text-white">
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Create a new observation
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {!showForm ? (
          <Button 
            onClick={() => setShowForm(true)}
            className="w-full"
            variant="outline"
          >
            + Add additional observers
          </Button>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Select Observation Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Observation Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {observationTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Who are you observing?
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Who are you observing?" />
                  </SelectTrigger>
                  <SelectContent>
                    {teachers.map((teacher) => (
                      <SelectItem key={teacher} value={teacher}>
                        {teacher}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject List
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Subject List" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Select Key Stage/Class
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Key Stage/Class" />
                  </SelectTrigger>
                  <SelectContent>
                    {keyStages.map((stage) => (
                      <SelectItem key={stage} value={stage}>
                        {stage}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Select Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1" variant="default">
                Create Observation
              </Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}